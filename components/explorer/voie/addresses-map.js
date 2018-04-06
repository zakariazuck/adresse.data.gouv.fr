import React from 'react'
import PropTypes from 'prop-types'
import {Marker} from 'react-mapbox-gl'
import {center, bbox} from '@turf/turf'

import theme from '../../../styles/theme'

import Mapbox from '../../mapbox'

const markerStyle = {
  width: 30,
  height: 30,
  borderRadius: '50%',
  backgroundColor: '#E0E0E0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #C9C9C9'
}

const selectedStyle = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.primary,
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `2px solid ${theme.primaryDark}`
}

class AddressesMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bounds: null,
      boundsCenter: null
    }

    this.getCirclePaint = this.getCirclePaint.bind(this)
  }

  componentWillMount() {
    const {data} = this.props
    const extent = bbox(data)
    const boundsCenter = center(data).geometry.coordinates

    this.setState({
      bounds: [
        extent.splice(0, 2),
        extent.splice(0, 2)
      ],
      boundsCenter
    })
  }

  getCirclePaint() {
    return {
      'circle-radius': 15,
      'circle-color': '#3099df',
      'circle-opacity': 0.8
    }
  }

  render() {
    const {bounds, boundsCenter} = this.state
    const {data, selectedAddress, onSelect} = this.props
    const center = selectedAddress ?
      selectedAddress.positions[0].coordinates :
      boundsCenter

    return (
      <Mapbox center={center} bounds={bounds} zoom={selectedAddress ? 17 : 15} fullscreen>
        {data && data.features.map(feature => (
          <Marker
            key={feature.properties.numero}
            onClick={() => onSelect(feature)}
            style={selectedAddress && feature.properties.numero === selectedAddress.numero ? selectedStyle : markerStyle}
            coordinates={feature.geometry.coordinates}>
            <div title={feature.properties.numero}>
              {feature.properties.numero}
            </div>
          </Marker>
        ))}
      </Mapbox>
    )
  }
}

AddressesMap.propTypes = {
  data: PropTypes.object.isRequired,
  selectedAddress: PropTypes.object,
  onSelect: PropTypes.func
}

AddressesMap.defaultProps = {
  selectedAddress: null
}

export default AddressesMap
