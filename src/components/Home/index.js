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
    console.log(formattedData)
  }

  getTeamsList = () => {
    const {teamList} = this.state
    return (
      <ul className="teams-cards-show-container">
        {teamList.map(item => (
          <TeamCard teamlistDetails={item} key={item.name} />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="teams-container">
          <div className="header-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="ipl logo"
            />
            <h1 className="header">IPL Dashboard</h1>
          </div>
        </div>
        {isLoading ? this.renderLoading() : this.getTeamsList()}
      </div>
    )
  }
}

export default Home
