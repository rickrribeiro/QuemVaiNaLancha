{/* <article class="leaderboard__profile boat-btn" data-boat-id="4">
        
        <span class="leaderboard__name">Salvador&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="leaderboard__value">20/12&nbsp;08:00<span>Segunda</span></span>
      </article> */}
async function getBoatCards(boats){
    let html = ""
    for(let i =0; i< boats.length; i++){
        html+=`<article class="leaderboard__profile boat-btn" data-boat-id="${boats[i].id}">
        <span class="leaderboard__name">${boats[i].departure==1?"Ilha":"Salvador"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="leaderboard__value">${new Date(boats[i].date).toLocaleDateString()}</span>
      </article>`
    }
    return html
}

module.exports ={
    getBoatCards
}