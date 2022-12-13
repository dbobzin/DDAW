const tableSettings = {
  container: {
    display: "flex",
    height: 100,
    width: 400,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    color: "white",
    height: 20,
    width: 20,
    borderRadius: "50%",
    padding: 10,
    fontWeight: "bold",
  },
  bio: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
  },

  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
  thStyle: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  },
  td: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  },

  trEveryOther: {
    backgroundColor: "#33a8ff",
  },
  h1: {
    textAlign: "center",
  },
  tdh1: {
    border: "1px solid #dddddd",
    textAlign: "center",
    padding: "8px",
  },
};
function Two() {
  return (
    <>
      <h1 style={tableSettings.h1}>Our plans:</h1>

      <table style={tableSettings.table}>
        <tr style={tableSettings.td}>
          <th style={tableSettings.thStyle}>GOLD</th>
          <th style={tableSettings.thStyle}>PLATINUM</th>
          <th style={tableSettings.thStyle}>ELITE</th>
          <th style={tableSettings.thStyle}>ELITE W/ CERAMIC</th>
        </tr>

        <tr style={tableSettings.trEveryOther}>
          <td style={tableSettings.tdh1}>$25</td>
          <td style={tableSettings.tdh1}>$29</td>
          <td style={tableSettings.tdh1}>$35</td>
          <td style={tableSettings.tdh1}>$40</td>
        </tr>

        <tr style={tableSettings.td}>
          <td style={tableSettings.td}> Or $8 per wash</td>
          <td style={tableSettings.td}> Or $10 per wash</td>
          <td style={tableSettings.td}> Or $12 per wash</td>
          <td style={tableSettings.td}> Or $15 per wash</td>
        </tr>

        <tr style={tableSettings.trEveryOther}>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Undercarriage
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Undercarriage
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Undercarriage
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Undercarriage
          </td>
        </tr>

        <tr style={tableSettings.td}>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> 2 step pre-soak
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Triple Wash/ Triple Rinse Front
            & Rear
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Triple Wash/ Triple Rinse Front
            & Rear
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Triple Wash/ Triple Rinse Front
            & Rear
          </td>
        </tr>
        <tr style={tableSettings.trEveryOther}>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Single Rinse
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Triple Foam
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Triple Foam
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Triple Foam
          </td>
        </tr>
        <tr style={tableSettings.td}>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Clear coat sealer
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Rain X protect
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Rain X protect
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Salt Remover
          </td>
        </tr>
        <tr style={tableSettings.trEveryOther}>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> spot free rinse
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Clear coat sealer
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Clear coat sealer
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Rain X
          </td>
        </tr>
        <tr style={tableSettings.td}>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> 3 dryer passes
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> 2 passes Spot free
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> 2 passes Spot free
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> Ceramic - Wax / Sealer
          </td>
        </tr>
        <tr style={tableSettings.trEveryOther}>
          <td style={tableSettings.td}></td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> 3 Dryer passes
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> 4 Dryer passes
          </td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> 3 passes Spot free rinse
          </td>
        </tr>
        <tr style={tableSettings.td}>
          <td style={tableSettings.td}></td>
          <td style={tableSettings.td}></td>
          <td style={tableSettings.td}></td>
          <td style={tableSettings.td}>
            <i class="far fa-check-circle"></i> 5 Dryer passes
          </td>
        </tr>
      </table>
    </>
  );
}
{
  /* <div style={cardStyles.container}>
        <span style={cardStyles.profilePicture}>D</span>
        <div style={cardStyles.bio}>
          <p style={cardStyles.userName}>Desmond Nyamador</p> */
}
export default Two;
