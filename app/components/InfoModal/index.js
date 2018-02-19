import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import Tone from "tone";

import Modal from "../Modal";
import ChordPlayer from "../ChordPlayer";
import IntervalPlayer from "../IntervalPlayer";
import OvertoneSeriesPlayer from "../OvertoneSeriesPlayer";
import UndertoneSeriesPlayer from "../UndertoneSeriesPlayer";
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
          on your keyboard. You can use the arrow keys to reposition the
          playable range of the lattice, or you can press Shift-K to switch
          back.
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
            Pitch in the conventional Western 7-note major scale, expressed by a
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
          which causes waves to cascade through the air, applying pressure to
          our eardrums and ultimately getting converted into electrical signals
          and fed into our brain. If these waves move through the air at a high
          enough frequency — greater than about 20 times a second and up to
          about 20,000 times a second — our brain will interpret the sound as a
          pitch.
        </p>
        <p>
          For instance, the note that corresponds to the second string on a
          guitar is an A. If you plucked this string, it would vibrate at about
          440Hz. Here is what that sounds like:
        </p>
        <ChordPlayer synth={this.props.synth} frequencies={[440]} />
        <p>
          You will probably notice that this doesn't sound anything like a
          guitar; it sounds very artificial and natural. Why? Because a guitar
          string doesn't just vibrate at one frequency; it actually vibrates at
          many faster frequencies, which we perceive as higher notes. When you
          pluck the A string, at the same time, you're also hearing the A above
          it, the E above that, the A above that, the C# above that, and so on.
        </p>
        <p>
          It turns out that the pattern of frequencies you hear for a given note
          will be exactly the same regardless of whichever string you pluck. If
          you have a string that vibrates at 440Hz, then it will also vibrate at
          multiples of this frequency: 880, 1320, 1760, etc. This pattern is
          called the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Harmonic_series_(music)"
            target="_blank"
          >
            harmonic series
          </a>. The first frequency, or <i>harmonic</i>, in this list is called
          the <i>fundamental</i>, and every other harmonic thereafter is called
          an <i>overtone</i> (so, another name for this is the{" "}
          <i>overtone series</i>).
        </p>
        <OvertoneSeriesPlayer
          synth={this.props.synth}
          fundamental={440}
          size={10}
        />
        <p>
          Given this, if we wanted a more realistically sounding tone, then we
          would need to combine some of these frequencies:
        </p>
        <ChordPlayer
          synth={this.props.synth}
          frequencies={[440, 880, 1320, 1760]}
        />
        <p>
          Now, a note on its own isn't any fun; things get more interesting once
          you start to combine them together and create harmony. Two notes can
          be close together in pitch or far away. We call the distance between
          two pitches an <i>interval</i>. Different intervals have different
          qualities, and to help us talk about them, we've given them different
          names. For instance, the most basic interval is the octave:
        </p>
        <IntervalPlayer synth={this.props.synth} frequencies={[440, 880]} />
        <p>
          You might notice that the two pitches that form an octave sound
          basically the same; there is a unity present here. This interval is
          formed by multiplying a frequency by a power of 2. In this case we
          multiplied 440Hz by 2 to get 880Hz, but we could also multiply it by 4
          and 8:
        </p>
        <IntervalPlayer
          synth={this.props.synth}
          frequencies={[440, 880, 1760, 3520]}
        />
        <p>
          So we know what happens if we multiply the frequency by even numbers
          (since all even numbers are divisible by 2). What happens if we
          multiply it by powers of certain odd numbers? Well, we get other
          intervals. For instance, if we use a power of 3, we get a{" "}
          <i>perfect fifth</i>. This is a very grounded, stable sound:
        </p>
        <IntervalPlayer synth={this.props.synth} frequencies={[440, 1320]} />
        <p>
          Actually, these two pitches (440Hz and 1320Hz) sound a little too far
          apart; we can bring them closer together for a more rich sound. If we
          know that multiplying a frequency by 2 raises the pitch by an octave,
          then dividing a frequency by 2 lowers the pitch by an octave. So we
          can divide 1320Hz by 2 to get 660:
        </p>
        <IntervalPlayer synth={this.props.synth} frequencies={[440, 660]} />
        <p>
          What if we use a power of 5, dividing it by 4 to bring it down two
          octaves? Then we get a <i>major third</i>:
        </p>
        <IntervalPlayer synth={this.props.synth} frequencies={[440, 550]} />
        <p>
          What's so special about these intervals? If we put them together we
          get a <i>chord</i> that you've probably heard many, many times before:
        </p>
        <ChordPlayer synth={this.props.synth} frequencies={[440, 550, 660]} />
        <p>
          We can even make use of math to find other notes and create new
          chords. For instance, we can string a bunch of fifths together to
          create an eery, open sound:
        </p>
        <ChordPlayer
          synth={this.props.synth}
          frequencies={[440, 660, 990, 1485]}
        />
        <p>
          Or we can string a bunch of major thirds together to create an
          unnerving sound:
        </p>
        <ChordPlayer
          synth={this.props.synth}
          frequencies={[440, 550, 687.5, 859.38]}
        />
        <p>
          So far, we've merely used the overtone series (correcting them to
          bring them into lower octaves). That gives us some interesting notes,
          but we can go further. There's another series, called the{" "}
          <i>undertone</i> series, and we create this by taking existing numbers
          in the overtone series and <i>dividing</i> them by odd numbers.
        </p>
        <UndertoneSeriesPlayer
          synth={this.props.synth}
          fundamental={440}
          size={10}
        />
        <p>
          For instance, if we take 440 and divide it by 3, we get this sound:
        </p>
        <IntervalPlayer synth={this.props.synth} frequencies={[440, 293.33]} />
        <p>
          Technically this is still a fifth, but if we bring the second note up
          one octave, then we create a <i>perfect fourth</i>:
        </p>
        <IntervalPlayer synth={this.props.synth} frequencies={[440, 586.66]} />
        <p>We can also divide by 5:</p>
        <IntervalPlayer synth={this.props.synth} frequencies={[440, 352]} />
        <p>
          This is known as a <i>minor third</i> interval. It sounds a little
          darker than the other intervals, even if we flip it to create a{" "}
          <i>minor sixth</i>:
        </p>
        <IntervalPlayer synth={this.props.synth} frequencies={[440, 704]} />
        <p>
          As you can see, music is very mathematical, and the lattice is an
          effort to exhibit that math in a way that you can experiment and play
          around with. See what new sounds you can create!
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
  synth: PropTypes.instanceOf(Tone.PolySynth),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CSSModules(InfoModal, styles);
