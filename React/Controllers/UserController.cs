using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using React.Models;

namespace React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        public TestContext _testCtx;

        public UserController()
        {
            if (_testCtx == null)
                _testCtx = new TestContext();

        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            
            return _testCtx.Users.ToArray();
        }

        [HttpPost("New")]
        public IActionResult New([FromForm] User u )
        {
            if (u.Name != null && u.Name != "" && u.Surname != null && u.Surname != "")
            {
                _testCtx.Users.Add(u);
                _testCtx.SaveChanges();
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            User u = _testCtx.Users.Find(id);
            if (u != null)
            {
                _testCtx.Users.Remove(u);
                _testCtx.SaveChanges();
            }
            return Ok();
        }
    }
}
