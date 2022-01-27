//get data from zoo animal APi
async function get_data()
{
    try {
        var data=await fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/4`);
        var ani=await data.json();
        for(let i=0;i<4;i++)
        {
            document.getElementById(`ani${i+1}`).src=ani[i].image_link;
            document.getElementById(`details${i+1}`).innerHTML=`${ani[i].name}<br><br>
            Latin Name: ${ani[i].latin_name}<br>
            Animal Type: ${ani[i].animal_type} <br>
            Active Time: ${ani[i].active_time}<br>
            Length Minimum: ${ani[i].length_min} feet<br>
            Length Maximum: ${ani[i].length_max} feet<br>
            Weight Minimum: ${ani[i].weight_min} pounds<br>
            Weight Maximum: ${ani[i].weight_max} pounds<br>
            Lifespan: ${ani[i].lifespan} Years<br>
            Habitat: ${ani[i].habitat}<br>
            Diet: ${ani[i].diet}<br>
            Geo Range: ${ani[i].geo_range}<br>
            Id: ${ani[i].id}`
        }
         
    } catch (error) {
        alert(error.message);
    }
   

}

get_data();