//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Project_v1_4.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Users
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public System.DateTime Birthdate { get; set; }
        public string Address { get; set; }
        public string PostCode { get; set; }
        public int CountryId { get; set; }
        public string Forename { get; set; }
        public string Lastname { get; set; }
    }
}
