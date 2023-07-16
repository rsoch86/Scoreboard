let homeScoreEl = document.getElementById("home-score")
let homeScore = 0



let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function addHomeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addHomeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addHomeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addGuestOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addGuestTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addGuestThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}