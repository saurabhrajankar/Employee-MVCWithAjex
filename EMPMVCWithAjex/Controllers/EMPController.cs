using EMPMVCWithAjex.Context;
using EMPMVCWithAjex.Models;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace EMPMVCWithAjex.Controllers
{
    public class EMPController : Controller
    {
        private readonly Empcontext context;
        public EMPController(Empcontext context)
        {
            this.context = context;
        }
        
        public IActionResult Index()
        {
            return View();  
        }
        //getdata
        [HttpGet]
        public JsonResult Emplist()
        {
            var data = context.Users.ToList();
            return new JsonResult(data);
        }
        //Addemployee
        [HttpPost]
        public JsonResult AddEmployee(EmpModel empModel)
        {
            var emp = new EmpModel()
            {
                EmpName = empModel.EmpName,
                Gender = empModel.Gender,
                Salary = empModel.Salary,
                Department = empModel.Department,
                StartDate = empModel.StartDate,
                Note = empModel.Note,
            };
            context.Users.Add(emp);
            context.SaveChanges();
            return new JsonResult("Data is saved");
        }
        //Edit
        public JsonResult Edit(int id)
        {
            var data = context.Users.Where(a => a.id == id).ToList().SingleOrDefault();
            return new JsonResult(data);
        }
        //Update
        [HttpPost]
        public JsonResult Update(EmpModel empModel)
        {
            context.Users.Update(empModel);
            context.SaveChanges();
            return new JsonResult("Data Updated");
        }
        public JsonResult Delete(int id)
        {

            var data = context.Users.Where(a => a.id == id).ToList().SingleOrDefault();
            context.Users.Remove(data);
            context.SaveChanges();
            return new JsonResult("Data Deleted");

        }
    }
}
