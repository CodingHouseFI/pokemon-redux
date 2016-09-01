import React, { Component } from 'react'

export default class PokemonList extends Component {

  render() {
    let { pokemon, sort } = this.props;

    if(sort) {
      pokemon.sort((a, b) => {
        if(typeof a[sort] === 'string') {
          a[sort] = a[sort].toLowerCase();
          b[sort] = b[sort].toLowerCase();
        }

        if(a[sort] < b[sort]) {
          return -1;
        } else if(a[sort] > b[sort]) {
          return 1;
        } else {
          return 0;
        }
      })
    }

    let Pokemon = pokemon
      .map(p => {
        let { _id, name, number, types, image } = p;

        return (
          <div className="col-xs-12 col-sm-6 col-md-4" key={_id}>
            <div>
              <img src={image} />
            </div>
            <div>
              <h3>{name}</h3>
              <p>Id: {number}</p>
            </div>
          </div>
        )
      })

    return (
      <div>
        {Pokemon}
      </div>
    )
  }
}
