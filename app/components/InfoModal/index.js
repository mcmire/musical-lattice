import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import Modal from "../Modal";
import anatomyOfACell from "../../svg/anatomy-of-a-cell.svg";
import styles from "./index.css";

class InfoModal extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
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
        <p styleName="centered-text">
          <img src={anatomyOfACell} />
        </p>
        <p>Each cell on the lattice has the following properties:</p>
        <ol>
          <li styleName="color-1">
            Offset in # of semitones (1 semitone = 25/24), expressed by some
            number of sharps (#) or flats (b)
          </li>
          <li styleName="color-2">
            Pitch in the conventional Western 8-note major scale, expressed by a
            number from 1 to 7, beginning on the tonic
          </li>
          <li styleName="color-3">
            Offset in # of syntonic commas (1 comma = 81/80), expressed by some
            number of +’s or -’s
          </li>
          <li styleName="color-4">
            Relationship to the tonic’s frequency, expressed as an improper
            fraction
          </li>
          <li styleName="color-5">Frequency in hertz</li>
        </ol>
        <p>
          The cell marked 1/1 is the <i>tonic</i>, by default set to a frequency
          of 440hz (the standard for equal-temperament tuning).
        </p>
        <h2>Why are the cells arranged this way?</h2>
        <p>
          Each cell is directly related to the cells around it in frequency in
          multiples of either 3 or 5, depending on the direction:
        </p>
        <ul>
          <li>
            Moving a cell to the east multiplies the frequency by 3/2 and raises
            the pitch by a <b>perfect fifth</b>.
          </li>
          <li>
            Moving a cell to the northeast multiplies the frequency by 5/4 and
            raises the pitch by a <b>major third</b>.
          </li>
          <li>
            Moving a cell to the northwest multiplies the frequency by 5/6 and
            lowers the pitch by a <b>minor third</b>.
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
          Although there are different ways to represent connections between
          notes in just intonation, the lattice is a particularly helpful
          diagram because a triangle of pitches pointing upward forms a major
          triad whereas a triangle pointing downward forms a minor triad. And
          because chords are either a fourth/fifth or a major/minor third away,
          it’s much easier with this layout to understand why chord progressions
          like I-IV-V-I, I-V-vi-VI-I, iii-vi-ii-V-I, or even I-VI#-ii-V-I are so
          prevalent in music.
        </p>
        <h2>
          What is the significance of multiplying/dividing frequencies by 3 and
          5?
        </h2>
        <p>
          We perceive sound as a result of movement in some physical object,
          which causes waves to cascade through the air, which applies pressure
          to our eardrums and ultimately gets interpreted by our brain as noise.
          If these waves move through the air at a high enough frequency —
          greater than about 20Hz and up to about 20Khz — we hear the sound as a
          pitch.
        </p>
        <p>
          The purest sound wave, one that produces a pitch, is a sine wave. You
          might have heard it before; it sounds very artificial and unnatural,
          but that’s because it is. When you hear an acoustic instrument such as
          piano, guitar, flute, or saxophone, it sounds a lot more real, more
          “alive”. Why? Because if you play a single note on one of these
          instruments, you’re not just hearing one pitch or sound wave, you’re
          actually hearing multiple pitches and sound waves packed into one.
        </p>
        <p>
          Take an A on the piano, for instance. When you hear the A, that’s not
          all you’re hearing; you’re actually hearing the A above it, the E
          above that, the A above that, the C# above that, etc. All of these
          notes are in the A, even though your brain perceives them as one note.
        </p>
        <p>
          Why is this? Because math. If you take a frequency, any frequency at
          all, and multiply it by a power of 2, you will hear a pitch that is
          one or more <i>octaves</i> above the first pitch. Multiply the
          frequency by a power of 3 and you get a <i>fifth</i>. Multiply by a
          power of 5 and you get a <i>major third</i>. (These are musical terms
          for <i>intervals</i>, distances between different pitches.)
        </p>
        <p>
          The series of pitches you get by doing this kind of math is called
          the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Harmonic_series_(music)"
            target="_blank"
          >
            overtone
          </a>{" "}
          series. The notes that correspond to these pitches are, at least in
          music theory circles, associated with brightness and happiness. The
          opposite of this is called the{" "} <i>undertone</i> series, and you
          obtain it by dividing instead of multiplying. These notes are
          associated with darkness and sadness.
        </p>
        <p>
          So the lattice is a visualization of the results you get by applying
          math to the frequency 440Hz (a standard frequency) to produce various
          pitches. Some of these pitches sound “out of tune”, but that’s another
          topic for another day. Just know that pitches that are closer together
          on the lattice will sound more in tune with each other than those that
          are far away.
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

export default CSSModules(InfoModal, styles);
