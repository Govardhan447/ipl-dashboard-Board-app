import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamList: ''}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))

    this.setState({teamList: formattedData, isLoading: false})
  }

  getTeamsList = () => {
    const {teamList} = this.state
    return (
      <div className="teams-container">
        <div className="header-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
          />
          <h1 className="header">IPL Dashboard</h1>
        </div>
        <ul className="teams-cards-show-container">
          {teamList.map(item => (
            <TeamCard teamlistDetails={item} key={item.name} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.getTeamsList()
        )}
      </div>
    )
  }
}

export default Home
