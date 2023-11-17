const standings = document.querySelector("#standings");
const addTeamForm = document.querySelector("#addTeam");

const teams = [];

function addTeamToTable(team) {
  const row = document.createElement("tr");
  
  const name = document.createElement("td");
  name.textContent = team.name;

  const played = document.createElement("td");
  played.textContent = team.played;

  const win = document.createElement("td");
  win.textContent = team.win;

  const draw = document.createElement("td");
  draw.textContent = team.draw;

  const loss = document.createElement("td");
  loss.textContent = team.loss;

  const scored = document.createElement("td");
  scored.textContent = team.scored;

  const against = document.createElement("td");
  against.textContent = team.against;

  const points = document.createElement("td");
  points.textContent = team.points;

  row.appendChild(name);
  row.appendChild(played);
  row.appendChild(win);
  row.appendChild(draw);
  row.appendChild(loss);
  row.appendChild(scored);
  row.appendChild(against);
  row.appendChild(points);

  standings.appendChild(row);
}

addTeamForm.addEventListener("submit", event => {
  event.preventDefault();
  
  const name = addTeamForm.elements.name.value;
  const played = addTeamForm.elements.played.value;
  const win = addTeamForm.elements.win.value;
  const draw = addTeamForm.elements.draw.value;
  const loss = addTeamForm.elements.loss.value;
  const scored = addTeamForm.elements.scored.value;
  const against = addTeamForm.elements.against.value;
  const points = addTeamForm.elements.points.value;

  teams.push({
    name,
    played,
    win,
    draw,
    loss,
    scored,
    against,
    points
  });

  addTeamToTable({ name, played, win, draw, loss, scored, against, points });
});