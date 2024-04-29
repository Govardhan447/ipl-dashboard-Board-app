import './index.css'

const LatestMatch = props => {
  const {latestMatchItem} = props

  console.log(latestMatchItem)

  const updateList = {
    umpires: latestMatchItem.umpires,
    result: latestMatchItem.result,
    manOfTheMatch: latestMatchItem.man_of_the_match,
    date: latestMatchItem.date,
    venue: latestMatchItem.venue,
    competingTeam: latestMatchItem.competing_team,
    competingTeamLogo: latestMatchItem.competing_team_logo,
    firstInnings: latestMatchItem.first_innings,
    secondInnings: latestMatchItem.second_innings,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updateList

  return (
    <div className="latest-match-container">
      <div className="team-Details-card">
        <h1 className="team-name">{competingTeam}</h1>
        <p className="date">{date}</p>
        <p className="details">{venue}</p>
        <p className="details">{result}</p>
      </div>
      <img
        className="latest-team-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="archive-team-card">
        <p className="title-name">First Innings</p>
        <p className="title-name-innigs">{firstInnings}</p>
        <p className="title-name">Second Innings</p>
        <p className="title-name-innigs">{secondInnings}</p>
        <p className="title-name">Man Of The Match</p>
        <p className="title-name-innigs">{manOfTheMatch}</p>
        <p className="title-name">Umpires</p>
        <p className="title-name-innigs">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
