/**
 * Signature hero element: Amanuel's own portfolio rendered as a small
 * entity-relationship diagram — a "profile" table related to three
 * specialty tables, echoing his work as a database specialist.
 */
export default function SchemaHero() {
  return (
    <div className="schema-hero">
      <svg
        className="schema-hero__lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M43,50 C 65,50 65,16 96,16" />
        <path d="M43,50 L 96,50" />
        <path d="M43,50 C 65,50 65,84 96,84" />
        <circle cx="96" cy="16" r="1.3" />
        <circle cx="96" cy="50" r="1.3" />
        <circle cx="96" cy="84" r="1.3" />
      </svg>

      <div className="schema-table schema-hero__profile">
        <div className="schema-table__head">
          <span>
            <img src="images/photo.png" />
          </span>
        </div>
        <ul className="schema-table__rows">
          <li>
            <span className="key">PK</span> name{" "}
            <span className="val">Amanuel</span>
          </li>
          <li>
            role <span className="val">Web Developer</span>
          </li>
          <li>
            role <span className="val">Database Specialist</span>
          </li>
          <li>
            role <span className="val">IT Professional</span>
          </li>
          <li>
            location <span className="val">Addis Ababa, ET</span>
          </li>
          <li>
            status <span className="val available">available</span>
          </li>
        </ul>
      </div>
      <div className="schema-hero__satellites">
        <div className="schema-table schema-table--sm">
          <div className="schema-table__head">
            <b className="val">Web developer</b>
            <span>
              <img src="images/menten.png" />
            </span>
          </div>
          <ul className="schema-table__rows">
            <li>
              stack <span className="val">React · JS</span>
            </li>
            <li>
              focus <span className="val">Responsive UI</span>
            </li>
          </ul>
        </div>

        <div className="schema-table schema-table--sm">
          <div className="schema-table__head">
            <li>
              <b className="val">Database Design</b>
            </li>
            <span>
              <img src="images/menten.png" />
            </span>
          </div>
          <ul className="schema-table__rows">
            <li>
              stack <span className="val">SQL · Firebase</span>
            </li>
            <li>
              focus <span className="val">Schema design</span>
            </li>
          </ul>
        </div>

        <div className="schema-table schema-table--sm">
          <div className="schema-table__head">
            <span>
              it_support
              <img src="images/systemmentenance.png" />
            </span>
          </div>
          <ul className="schema-table__rows">
            <li>
              stack <span className="val">Networking</span>
            </li>
            <li>
              focus <span className="val">Troubleshooting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
