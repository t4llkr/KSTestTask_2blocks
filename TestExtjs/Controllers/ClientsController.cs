using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestExtjs.Data;
using TestExtjs.Models;

namespace TestExtjs.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class ClientsController : Controller
    {
        private readonly DatabaseContext _context;

        public ClientsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Users1
        [HttpGet]
        public async Task<JsonResult> GetClientsList()
        {
            var res = await _context.Clients.ToListAsync();

            return new JsonResult(res);
        }

        //// GET: api/Users1/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Clients>> GetUsersList(long id)
        //{
        //    var users = await _context.Clients.FindAsync(id);

        //    if (users == null)
        //    {
        //        return NotFound();
        //    }

        //    return users;
        //}

        //// PUT: api/Users1/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutUsers(long id, Users users)
        //{
        //    if (id != users.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(users).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!UsersExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Users1
        //[HttpPost]
        //public async Task<ActionResult<Users>> PostUsers(Clients clients)
        //{
        //    _context.Clients.Add(clients);
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (UsersExists(clients.Id))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtAction("GetUsers", new { id = clients.Id }, clients);
        //}

        //// DELETE: api/Users1/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Clients>> DeleteUsers(long id)
        //{
        //    var clients = await _context.Clients.FindAsync(id);
        //    if (clients == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Clients.Remove(clients);
        //    await _context.SaveChangesAsync();

        //    return clients;
        //}

        //private bool UsersExists(long id)
        //{
        //    return _context.Clients.Any(e => e.Id == id);
        //}
    }
}
