//import moment from 'moment'  // this import will cause errors

const moment = require.requireActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp)
}
