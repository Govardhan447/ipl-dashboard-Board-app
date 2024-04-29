import {Component} from 'react'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesList: ''}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formmatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {recentMatches} = formmatedData
    console.log(recentMatches)

    this.setState({teamMatchesList: formmatedData})
  }

  render() {
    const {teamMatchesList} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesList

    return (
      <div className="teamMatches-container">
        <img className="banner" src={teamBannerUrl} alt="banner" />
        <p className="title">Latest Matches</p>
        <LatestMatch latestMatchItem={latestMatchDetails} />
        <ul className="MatchCard-container">
          {recentMatches.map(item => (
            <MatchCard recentMatchDetails={item} key={item.competing_team} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
