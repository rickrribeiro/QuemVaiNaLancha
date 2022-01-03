$(".leaderboard__profile").click((e)=>{
  const boat_id =
            e.target.getAttribute('data-boat-id') ||
            e.target.parentElement.getAttribute('data-boat-id');
  console.log(boat_id)
  window.location = '/lancha/'+boat_id
})


$(".create_boat_action").click((e)=>{
  //Swal.fire('Any fool can use a computer')
  Swal.fire({
    title: 'Adicionar Lancha',
    width: 750,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: "Adicionar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#d33",
    customClass: 'swal2-overflow',
    didOpen: (toast) => {
      console.log( $('#time'))
      $('#date').datepicker({});
      
    },
    html: `
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="departure">
              <option selected>Selecione o local de partida</option>
              <option value="1">Ilha do Cal</option>
              <option value="2">Salvador</option>
            </select>
            <br>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="destination">
              <option selected>Selecione o destino</option>
              <option value="1">Ilha do Cal</option>
              <option value="2">Salvador</option>
            </select>
            <br>
            <p>Data: <input type="text" id="date" name="date"></p>
            <p>Hora: <input type="time" id="time" name="time"></p>
            
                        `,
  }).then(async ({ value, isDismissed, isConfirmed, isDenied }) => {
    if (isConfirmed) {
      const date = $("#date").val()
      const time = $("#time").val()
      const departure = $("#departure").val()
      const destination = $("#destination").val()
      console.log(date)
      console.log(departure)
      console.log(destination)
  
      const res = await fetch('/lancha/create', {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date,
          time,
          departure,
          destination
        }),
      });
      if(res.status == 200){
        window.location.replace("/lancha/1");
      }
    }
  });
  
})


