import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesList: ''}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  renderFormmatingData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    competingTeamLogo: data.competing_team_logo,
    matchStatus: data.match_status,
  })

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    const formmatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.renderFormmatingData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachItem =>
        this.renderFormmatingData(eachItem),
      ),
    }

    this.setState({teamMatchesList: formmatedData, isLoading: false})
  }

  renderLoading = () => (
    <div data-testid="loader" className="loading-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderTeamMatchDetails = () => {
    const {teamMatchesList} = this.state

    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesList

    return (
      <>
        <img className="banner" src={teamBannerUrl} alt="team banner" />
        <p className="title">Latest Matches</p>
        <LatestMatch latestMatchItem={latestMatchDetails} />
        <ul className="MatchCard-container">
          {recentMatches.map(item => (
            <MatchCard recentMatchDetails={item} key={item.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    const className = `teamMatches-container ${this.getClassName()}`

    return (
      <div className={className}>
        {isLoading ? this.renderLoading() : this.renderTeamMatchDetails()}
      </div>
    )
  }
}

export default TeamMatches
