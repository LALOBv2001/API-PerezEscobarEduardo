new gridjs.Grid({
    columns: ['NombrePiloto','NombreCopiloto','CapacidadPasajeros','CapacidadGalonesCombustible','PaisDespegue','PaisAterrizaje','CostoBoleto','CapacidadEquipajePasajero','DuracionVueloHoras'],
    server:{
        url:'http://localhost:8081/vuelo/',
        then: data => data.map((user) => [
            // user.ID,
            user.NombrePiloto,
            user.NombreCopiloto,
            user.CapacidadPasajeros,
            user.CapacidadGalonesCombustible,
            user.PaisDespegue,
            user.PaisAterrizaje, 
            user.CostoBoleto, 
            user.CapacidadEquipajePasajero, 
            user.DuracionVueloHoras]
        )
      } 
    }).render(document.getElementById("miGrid"));