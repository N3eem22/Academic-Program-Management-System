using Grad.Core.Entities;
using Grad.Core.Entities.Identity;


﻿using Grad.Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talabat.Core.Entities.Identity
{
    public class AppUser:IdentityUser
    {
        public string DisplayName { get; set; }

        public string Role { get; set; }
        public Address Address { get; set; }

        public ICollection<AppUserFaculty> Faculties { get; set; } = new HashSet<AppUserFaculty>();

        public ICollection<AppUserUni> Universities { get; set; } = new HashSet<AppUserUni>();

        //    public ICollection<University> Universities { get; set; } = new HashSet<University>();



    }
}
