using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Web.Mvc;
using System.Web.Security;

namespace Project_v1_4.Models
{
    public class UserModel
    {
        public UserModel()
        {
            MusicTypeChoosens = new List<UserMusicTypes>();
        }

        [Display(Name = "Email address")]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string UserName { get; set; }
        [RegularExpression(@"^[a-zA-Z''-'\s]{1,30}$",
         ErrorMessage = "Characters are not allowed.")]
        public string Forename { get; set; }
        [RegularExpression(@"^[a-zA-Z''-'\s]{1,30}$",
         ErrorMessage = "Characters are not allowed.")]
        public string Lastname { get; set; }
        public DateTime Birthdate { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(8, ErrorMessage = "Password length can't be less than 8 characters.")]
        [System.ComponentModel.DataAnnotations.Compare(nameof(ConfirmPassword), ErrorMessage = "Passwords don't match.")]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$",
         ErrorMessage = "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number")]
        public string UserPassword { get; set; }
        [Required(ErrorMessage = " ConfirmPassword is required")]
        public string ConfirmPassword { get; set; }
        public string PasswordErrorMessage { get; set; }
        public string Address { get; set; }
        public string PostCode { get; set; }
        public int CountryId { get; set; }
        public List<UserMusicTypes> MusicTypeChoosens { get; set; }
        public List<string> MusicTypesSelected { get; set; }

    }
}