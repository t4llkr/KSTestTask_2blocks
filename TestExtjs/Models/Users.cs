using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace TestExtjs.Models
{
    public partial class Users
    {
        public long Id { get; set; }
        public string Lastname { get; set; }
        public string Name { get; set; }
        public string Middlename { get; set; }
        public string Birthdate { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
