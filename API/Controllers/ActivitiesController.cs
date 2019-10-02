using Microsoft.AspNetCore.Mvc;
using MediatR;
using Domain;
using Application.Activities;
using System.Threading.Tasks;
using System.Collections.Generic; 

namespace API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;
            
        }
        // get list of activities
        [HttpGet]
        public async Task<ActionResult< List<Activity> > > List() 
        {
            return await _mediator.Send(new List.Query());
        }
    }
}