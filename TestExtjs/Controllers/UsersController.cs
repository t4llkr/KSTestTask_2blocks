using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TestExtjs.Models;

namespace TestExtjs.Controllers
{
    public class UsersController: Controller
    {
        public JsonResult GetUsersList()
        {
            //todo: получить данные из БД

            return new JsonResult(new List<User>()
            {
               new User("Сергеев","Андрей"),
               new User("Петров","Петр"),
               new User("Сидоров","Сидор")
            });
        }
    }
}
