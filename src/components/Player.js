import React, { PureComponent } from 'react';
import Counter from './Counter';
import Crown from './Crown';

class Player extends PureComponent {
  render() {
    const {
      removePlayer,
      id,
      name,
      score,
      changeScore,
      index,
      isHighScore,
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <Crown isHighscore={isHighScore} />
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

export default Player;
