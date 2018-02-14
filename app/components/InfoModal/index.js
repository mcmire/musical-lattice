import React from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";

class InfoModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onClose={this.props.onClose}
      >
        <h2>What am I looking at?</h2>
        <p>
          This is an interactive diagram designed to show relationships between
          musical pitches (tuned to{" "}
          <a
            href="https://en.wikipedia.org/wiki/Five-limit_tuning"
            target="_blank"
          >
            5-limit
          </a>{" "}
          <a
            href="https://en.wikipedia.org/wiki/Just_intonation"
            target="_blank"
          >
            just intonation
          </a>).
        </p>
        <h2>What do I do?</h2>
        <p>
          By default the lattice is in “mouse” mode. You can click on a cell to
          play the pitch that corresponds to that cell.
        </p>
        <p>
          Pressing the K key on your keyboard will place the lattice in
          “keyboard” mode. From here you can play pitches by pressing any letter
          on your keyboard. (You can press Shift-K to switch back.)
        </p>
        <h2>What do the labels on each cell mean?</h2>
        <p>
          The cell marked 1/1 is the <i>tonic</i>, by default set to a frequency
          of 440hz (the standard for equal-temperament tuning).
        </p>
        <p>Each cell on the lattice has the following properties:</p>
        <ul>
          <li>
            Pitch in the conventional Western 8-note major scale, expressed by a
            number from 1 to 7, beginning on the tonic
          </li>
          <li>
            Offset in # of semitones (1 semitone = 25/24), expressed by some
            number of ♯ or ♭
          </li>
          <li>
            Offset in # of syntonic commas (1 comma = 81/80), expressed by some
            number of +’s or -’s
          </li>
          <li>
            Relationship to the tonic’s frequency, expressed as an improper
            fraction
          </li>
          <li>Frequency in hertz</li>
        </ul>
        <h2>Why are the cells arranged this way?</h2>
        <p>
          Each cell is directly related to the cells around it in frequency in
          multiples of either 3 or 5, depending on the direction:
        </p>
        <ul>
          <li>
            Moving a cell to the east multiplies the frequency by 3 and raises
            the pitch by a <b>perfect fifth</b>.
          </li>
          <li>
            Moving a cell to the northeast multiplies the frequency by 5 and
            raises the pitch by a <b>major third</b>.
          </li>
          <li>
            Moving a cell to the northwest multiplies the frequency by 5/3 and
            raises the pitch by a <b>major sixth</b>.
          </li>
        </ul>
        <p>
          Besides these adjacent relationships, there are also two other
          notable, non-adjacent relationships:
        </p>
        <ul>
          <li>
            Moving 4 cells to the west and 1 cell to the northeast multiplies
            the frequency by 81/80 and raises the pitch by a{" "}
            <b>syntonic comma</b>.
          </li>
          <li>
            Moving 2 cells to the northeast multiplies the frequency by 25/24
            and raises the pitch by a <b>semitone</b>.
          </li>
        </ul>
        <p>
          Of course, for any of these relationships, reversing the direction
          results in a lowered pitch by the same amount.
        </p>
        <p>
          To answer the question, although there are different ways to represent
          connections between notes in just intonation, the lattice is a
          particularly helpful diagram because a triangle of pitches pointing
          upward forms a major triad whereas a triangle pointing downward forms
          a minor triad. And because chords are either a fourth/fifth or a
          major/minor third away, it’s much easier with this layout to
          understand why chord progressions like I-IV-V-I, I-V-vi-VI-I,
          iii-vi-ii-V-I, or even I-VI#-ii-V-I are so prevalent in music.
        </p>
        <h2>Credit</h2>
        <p>
          In building this, I took a lot of inspiration from{" "}
          <a href="http://www.garygarrett.me/?p=91">Gary Garrett</a>. Gary is a
          songwriter and musician who’s put together a blog series where,
          section by section, he introduces his version of the lattice — which
          is lovingly hand-drawn — and explains the magic behind it in much more
          detail than I can here. He’s even created some really cool animations
          to illustrate some of the theory behind songs he’s written. Seriously,
          go check him out!
        </p>
      </Modal>
    );
  }
}

InfoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default InfoModal;
