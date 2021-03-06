import { FETCH_ALL_RIDES_REQUEST } from '../../../src/redux/types'
import { fetchAllRideRequests } from '../../../src/redux/actions'

import * as FirebaseService from '../../../src/services/firebase'
jest.mock('../../../src/services/firebase')

const mockedRides = {
  driverId: 'AIYmwTmrdTfUuGeuoNF0SYgXJ1j1',
  rideId: '-KndyvnnlSN05mJxL57Q',
  origin: 'PUC',
  destination: 'Bomfim',
  days: 'Seg-Sex',
  hours: '19h',
  profile: {
    name: 'Eduardo Moroni',
    contact: {
      kind: 'Whatsapp',
      value: '+5559999999'
    }
  }
}

describe('RideRequest actions', () => {
  const dispatchMock = jest.fn()

  it('Should create a thunk for fetching all ride requests', async () => {
    FirebaseService.getAllRideRequests = jest.fn(() => mockedRides)

    const expectedAction = {
      type: FETCH_ALL_RIDES_REQUEST,
      payload: mockedRides
    }

    const thunk = fetchAllRideRequests()
    await thunk(dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
  })
})
