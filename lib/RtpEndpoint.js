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

var ChecktypeError = kurentoClient.checkType.ChecktypeError;

var SdpEndpoint = require('kurento-client-core').abstracts.SdpEndpoint;

/**
 * Builder for the {@link module:elements.RtpEndpoint RtpEndpoint}
 *
 * @classdesc
 *  Endpoint that provides bidirectional content delivery capabilities with remote networked peers through RTP protocol. An {@link module:elements.RtpEndpoint RtpEndpoint} contains paired sink and source :rom:cls:`MediaPad` for audio and video.
 *
 * @extends module:core/abstracts.SdpEndpoint
 *
 * @constructor module:elements.RtpEndpoint
 */
function RtpEndpoint(){
  RtpEndpoint.super_.call(this);
};
inherits(RtpEndpoint, SdpEndpoint);

/**
 * @alias module:elements.RtpEndpoint.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the {@link module:core.MediaPipeline MediaPipeline} to which the endpoint belongs
 */
RtpEndpoint.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },
};

/**
 * @alias module:elements.RtpEndpoint.events
 *
 * @extend module:core/abstracts.SdpEndpoint.events
 */
RtpEndpoint.events = SdpEndpoint.events;

module.exports = RtpEndpoint;

RtpEndpoint.check = function(key, value)
{
  if(!(value instanceof RtpEndpoint))
    throw ChecktypeError(key, RtpEndpoint, value);
};
