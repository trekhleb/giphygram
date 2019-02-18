import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { RequestService } from '../RequestService';

describe('RequestService', () => {
  it('should perform successful GET requests', (done) => {
    const testUrl = 'http://localhost';
    const testResponse = { testData: 'Test response data' };

    const testParams = {
      param1: 'Param #1 value',
      param2: 'Param #2 value',
    };
    const mock = new AxiosMockAdapter(axios);
    mock.onGet(testUrl).reply(200, testResponse);

    RequestService
      .get(testUrl, testParams)
      .then((responseData) => {
        // We should receive mocked response.
        expect(responseData).toBeDefined();
        expect(responseData.data).toEqual(testResponse);
      })
      .catch(() => {
        // We should not get here.
        expect(true).toBe(false);
      })
      .finally(() => {
        done();
      });
  });

  it('should perform not successful GET requests', (done) => {
    const testUrl = 'http://localhost';
    const mock = new AxiosMockAdapter(axios);
    mock.onGet(testUrl).reply(500);

    RequestService
      .get(testUrl)
      .then(() => {
        // We should not get here.
        expect(true).toBe(false);
      })
      .catch((err) => {
        // We should get here.
        expect(err).toBeDefined();
      })
      .finally(() => {
        done();
      });
  });
});
