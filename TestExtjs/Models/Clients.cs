using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace TestExtjs.Models
{
    public partial class Clients
    {
        public long Id { get; set; }
        public long Sum { get; set; }
        public long ReceiverReq { get; set; }
        public string Date { get; set; }
        public string Corresp { get; set; }
        public string Dohname { get; set; }
    }
}
