using EMPMVCWithAjex.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace EMPMVCWithAjex.Context
{  
    public class Empcontext : DbContext
    {
    
        public Empcontext(DbContextOptions options) : base(options)
        {
    
        }
        public DbSet<EmpModel> Users { get; set; }
    }


}   

