﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Project_v1_4.Models;
#pragma warning disable CS0105 // La directive using de 'System.Data.Linq' est apparue précédemment dans cet espace de noms
#pragma warning restore CS0105 // La directive using de 'System.Data.Linq' est apparue précédemment dans cet espace de noms
using System.Windows.Forms;
using System.Data;
using System.Data.SqlClient;

namespace Project_v1_4.Controllers
{
    public class HomeController : Controller
    {

        MusicTypeEntities mt = new MusicTypeEntities();
        FindMyPartyEntities1 ct = new FindMyPartyEntities1();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult CreateUser()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SaveContact(string email, string forename, string lastname, string birthdate, string userPassword, string address, string postCode, int countryId, List<String> MusicTypesSelected)
        {
            UserEntities UE = new UserEntities();
            UserMusicTypeEntities UM = new UserMusicTypeEntities();
            var preUserId = UE.Users.Max(u => u.UserId);
            preUserId++;
            var userId = preUserId++;
            DateTime uBirhtdate = Convert.ToDateTime(birthdate);
            var ts = DateTime.Today - uBirhtdate;
            var year = DateTime.MinValue.Add(ts).Year - 1;
            using (SqlConnection con = new SqlConnection(@"Data Source=DESKTOP-IGATOF0;initial catalog=FindMyParty;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;"))
            {
                SqlCommand cmd = new SqlCommand("select * from Users where username like @Username;");
                cmd.Parameters.AddWithValue("@username", email);
                cmd.Connection = con;
                con.Open();

                DataSet ds = new DataSet();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(ds);
                con.Close();

                bool emailAlreadyTaken = ((ds.Tables.Count > 0) && (ds.Tables[0].Rows.Count > 0));

                if (emailAlreadyTaken)
                {
                    System.Windows.Forms.MessageBox.Show("Email address already taken!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);

                    return View();
                }
                //server side verification to check if the userr tries not to send false information that will stop the website from working
                else if (ModelState.IsValid && uBirhtdate != DateTime.MinValue && year > 13 && email.Length <= 255 && forename.Length <= 35 && lastname.Length <= 35 && userPassword.Length <= 25 && address.Length <= 50 && postCode.Length <= 10)
                {
                    List<int> MusicTypeIdSelected = MusicTypesSelected.Select(int.Parse).ToList();
                    Users user = new Users();
                    user.Username = email;
                    user.Address = address;
                    user.Password = userPassword;
                    user.Birthdate = uBirhtdate;
                    user.PostCode = postCode;
                    user.CountryId = countryId;
                    user.Forename = forename;
                    user.Lastname = lastname;
                    user.UserId = userId;
                    UE.Users.Add(user);
                    UE.SaveChanges();
                    for (int i = 0; i < MusicTypeIdSelected.Count; i++)
                    {
                        UserMusicTypes userMusicType1 = new UserMusicTypes();
                        var preUserMusicTypeId = UM.UserMusicTypes.Max(u => u.UserMusicTypeId);
                        preUserMusicTypeId++;
                        var userMusicTypeId = preUserMusicTypeId++;
                        userMusicType1.UserMusicTypeId = userMusicTypeId;
                        userMusicType1.UserId = userId;
                        userMusicType1.MusicTypeId = MusicTypeIdSelected[i];
                        UM.UserMusicTypes.Add(userMusicType1);
                        UM.SaveChanges();
                    };
                    return RedirectToAction("Index", "Home");
                }
                System.Windows.Forms.MessageBox.Show("The birthdate entered is not valid. You must be older than 13 years old to create an account", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return null;
            }
        }
        [HttpPost]
        public ActionResult LoginUser(LoginModel model)
        {
            if (model.UserName == null)
            {
                System.Windows.Forms.MessageBox.Show("Please enter a valid username", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return View("Index");
            }
            if (model.Password == null)
            {
                System.Windows.Forms.MessageBox.Show("Please enter your password", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return View("Index");
            }
            else
            {
                using (SqlConnection con = new SqlConnection(@"Data Source=DESKTOP-IGATOF0;initial catalog=FindMyParty;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;"))
                {
                    SqlCommand cmd = new SqlCommand("select * from Users where username like @Username and password = @Password;");
                    cmd.Parameters.AddWithValue("@username", model.UserName);
                    cmd.Parameters.AddWithValue("@Password", model.Password);
                    cmd.Connection = con;
                    con.Open();

                    DataSet ds = new DataSet();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(ds);
                    con.Close();

                    bool loginSuccessful = ((ds.Tables.Count > 0) && (ds.Tables[0].Rows.Count > 0));

                    if (loginSuccessful)
                    {
                        Console.WriteLine("Success!");

                        return View("HomePage");
                    }
                    else
                    {
                        System.Windows.Forms.MessageBox.Show("Invalid username or password", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return View("Index");
                    }
                }
            }
        }
            public ActionResult Contact()
        {
            var musics = mt.MusicTypes.ToList();
            var countries = ct.Countries.ToList();
            if (musics != null && countries != null)
            {
                ViewBag.Musics = musics;
                ViewBag.Countries = countries;
            }
            ViewBag.Message = "Your contact page.";

            var userModel = new UserModel { };

            HtmlHelper.ClientValidationEnabled = false;
            return View(userModel);
        }
    }
}