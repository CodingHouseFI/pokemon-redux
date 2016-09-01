import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { fetchPokemon } from '../actions/PokemonActions'

import PokemonList from './PokemonList'

class PokemonPage extends Component {
  componentWillMount() {
    this.props.fetchPokemon();
  }

  render() {
    let { pokemon } = this.props;

    return (
      <div>
        <h1 className="text-center">PokemonPage</h1>
        <PokemonList pokemon={pokemon} />
      </div>
    )
  }
}

export default connect(
  state => ({
    pokemon: state.pokemon
  }),
  dispatch => ({
    fetchPokemon() {
      dispatch(fetchPokemon());
    }
  })
)(PokemonPage)
