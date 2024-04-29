import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamlistDetails} = props
  const {id, name, teamImageUrl} = teamlistDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p className="team">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
