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



var HttpEndpoint = require('./abstracts/HttpEndpoint');


/**
 * Builder for the {@link HttpGetEndpoint}.
 *
 * @classdesc
 *  An <code>HttpGetEndpoint</code> contains SOURCE pads for AUDIO and VIDEO, delivering media using HTML5 pseudo-streaming mechanism.
 *  
 *     This type of endpoint provide unidirectional communications. Its {@link MediaSink} is associated with the HTTP GET method
 *
 * @extends module:elements/abstracts.HttpEndpoint
 *
 * @constructor module:elements.HttpGetEndpoint
 *
 * @param {string} id
 */
function HttpGetEndpoint(id){
  HttpEndpoint.call(this, id);
};
inherits(HttpGetEndpoint, HttpEndpoint);


/**
 * @alias module:elements.HttpGetEndpoint.constructorParams
 *
 * @property {int} [disconnectionTimeout]
 *  disconnection timeout in seconds.
 *  
 *  This is the time that an http endpoint will wait for a reconnection, in case an HTTP connection is lost.
 *
 * @property {MediaPipeline} mediaPipeline
 *  the {@link MediaPipeline} to which the endpoint belongs
 *
 * @property {MediaProfileSpecType} [mediaProfile]
 *  the {@link MediaProfileSpecType} (WEBM, MP4...) for the endpoint
 *
 * @property {boolean} [terminateOnEOS]
 *  raise a :rom:evnt:`MediaSessionTerminated` event when the associated player raises a :rom:evnt:`EndOfStream`, and thus terminate the media session
 */
HttpGetEndpoint.constructorParams = {
  disconnectionTimeout: {
    type: 'int',
  },

  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },

  mediaProfile: {
    type: 'MediaProfileSpecType',
  },

  terminateOnEOS: {
    type: 'boolean',
  },
};

/**
 * @alias module:elements.HttpGetEndpoint.events
 *
 * @extend module:elements/abstracts.HttpEndpoint.events
 */
HttpGetEndpoint.events = [];
HttpGetEndpoint.events.concat(HttpEndpoint.events);


module.exports = HttpGetEndpoint;


HttpGetEndpoint.check = function(key, value)
{
  if(!(value instanceof HttpGetEndpoint))
    throw SyntaxError(key+' param should be a HttpGetEndpoint, not '+typeof value);
};