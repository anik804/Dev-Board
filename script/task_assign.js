const co_b = document.querySelectorAll("#complete-button");

for( let i = 0 ; i < co_b.length ; i++ )
    {
        const com = co_b[i];

        com.addEventListener("click",function(event){
        com.setAttribute("disabled", "disabled");

        alert("Board updated Successfully");

        const task_assign = document.getElementById("task-assign");
        const task_int = parseInt(task_assign.innerText);
        
        if( task_int - 1 === 0 )
        {
            alert("Congrats !!! You have completed all the current tasks.");
        }

        task_assign.innerText = task_int - 1;

        const nav = document.getElementById("nav-activity");
        const nav_int = parseInt(nav.innerText);
        nav.innerText = nav_int + 1;

        const head = document.getElementById("heading").innerText;

        const activity = document.getElementById("activity");
        const p = document.createElement("p");
        p.innerText = `You have completed the task : ${head} at ${new Date().toLocaleTimeString()}`;
        activity.appendChild(p);
    });
}