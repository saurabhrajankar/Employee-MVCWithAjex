using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EMPMVCWithAjex.Models
{
    public class EmpModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

            public int id { get; set; }
            public string EmpName { get; set; }
            public string Gender { get; set; }
            public string Department { get; set; }
            public string Salary { get; set; }
            public DateTime StartDate { get; set; }
            public string Note { get; set; }
    }
}
