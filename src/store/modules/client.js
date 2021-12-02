/* eslint-disable */
import { apiService } from "../../services/api";

// Retrun all clients
function getClients() {
    return new Promise((resolve, reject) => {
        apiService.get("client").then(({ data }) => {
          resolve(data);
        }).catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }


  /**
 * Returns client by id
 * @param {object} _
 * @param {string} clientid - client Id
 */

   function getClient(_, clientid) {
    return new Promise((resolve, reject) => {
      apiService.query("client/", {
          params: { clientid: clientid }
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }


  /**
 * Adds Client
 * @param {object} _
 * @param {object} params - Paramss
 */
function addClient(_, params) {
    return new Promise((resolve, reject) => {
      apiService.post("client/", params)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }


/**
 * Removes client
 * @param {object} _
 * @param {string} id - ID
 */
 function removeClient(_, clientid) {
    return new Promise((resolve, reject) => {
      apiService
        .delete("client/" + clientid)
        .then(({ data }) => {
          resolve(data.results);
        })
        .catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }



  /**
 * Removes client
 * @param {object} _
 * @param {string} _id
 */
   function updateClient(_, params) {
    return new Promise((resolve, reject) => {
      apiService
        .patch("client/"+ params._id, params.data)
        .then(({ data }) => {
          resolve(data.results);
        })
        .catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }

const state = {};

const actions = {
    getClients,
    getClient,
    addClient,
    removeClient,
    updateClient
};

const mutations = {};

export default {
  state,
  actions,
  mutations
};