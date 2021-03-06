/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var Transaction = kurentoClient.TransactionsManager.Transaction;

var BaseRtpEndpoint = require('kurento-client-core').abstracts.BaseRtpEndpoint;

/**
 * Builder for the {@link module:elements.WebRtcEndpoint WebRtcEndpoint}
 *
 * @classdesc
 *  WebRtcEndpoint interface. This type of <code>Endpoint</code> offers media streaming using WebRTC.
 *
 * @extends module:core/abstracts.BaseRtpEndpoint
 *
 * @constructor module:elements.WebRtcEndpoint
 *
 * @fires {@link module:elements#event:OnIceCandidate OnIceCandidate}
 * @fires {@link module:elements#event:OnIceGatheringDone OnIceGatheringDone}
 */
function WebRtcEndpoint(){
  WebRtcEndpoint.super_.call(this);
};
inherits(WebRtcEndpoint, BaseRtpEndpoint);


/**
 * Provide a remote ICE candidate
 *
 * @alias module:elements.WebRtcEndpoint.addIceCandidate
 *
 * @param {module:elements/complexTypes.IceCandidate} candidate
 *  Remote ICE candidate
 *
 * @param {module:elements.WebRtcEndpoint~addIceCandidateCallback} [callback]
 *
 * @return {external:Promise}
 */
WebRtcEndpoint.prototype.addIceCandidate = function(candidate, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('IceCandidate', 'candidate', candidate, {required: true});

  var params = {
    candidate: candidate,
  };

  return this._invoke(transaction, 'addIceCandidate', params, callback);
};
/**
 * @callback module:elements.WebRtcEndpoint~addIceCandidateCallback
 * @param {external:Error} error
 */

/**
 * Init the gathering of ICE candidates.
 * It must be called after SdpEndpoint::generateOffer or SdpEndpoint::processOffer
 *
 * @alias module:elements.WebRtcEndpoint.gatherCandidates
 *
 * @param {module:elements.WebRtcEndpoint~gatherCandidatesCallback} [callback]
 *
 * @return {external:Promise}
 */
WebRtcEndpoint.prototype.gatherCandidates = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  return this._invoke(transaction, 'gatherCandidates', callback);
};
/**
 * @callback module:elements.WebRtcEndpoint~gatherCandidatesCallback
 * @param {external:Error} error
 */

/**
 * @alias module:elements.WebRtcEndpoint.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the {@link module:core.MediaPipeline MediaPipeline} to which the endpoint belongs
 */
WebRtcEndpoint.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },
};

/**
 * @alias module:elements.WebRtcEndpoint.events
 *
 * @extend module:core/abstracts.BaseRtpEndpoint.events
 */
WebRtcEndpoint.events = BaseRtpEndpoint.events.concat(['OnIceCandidate', 'OnIceGatheringDone']);

module.exports = WebRtcEndpoint;

WebRtcEndpoint.check = function(key, value)
{
  if(!(value instanceof WebRtcEndpoint))
    throw ChecktypeError(key, WebRtcEndpoint, value);
};
