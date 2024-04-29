import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const updateData = {
    competingTeamLogo: recentMatchDetails.competing_team_logo,
    matchStatus: recentMatchDetails.match_status,
    result: recentMatchDetails.result,
    competingTeam: recentMatchDetails.competing_team,
  }
  const {competingTeamLogo, result, matchStatus, competingTeam} = updateData

  const statusColor = matchStatus === 'Lost' ? 'red' : 'green'

  return (
    <li className="match-card-container">
      <img
        className="card-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="result">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={statusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
