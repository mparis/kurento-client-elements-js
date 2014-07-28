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

var checkType = require('checktype');



var Hub = require('core/abstracts').Hub;


/**
 * Create a {@link Mixer} belonging to the given pipeline.
 *
 * @classdesc
 *  A {@link Hub} that allows routing of video between arbitrary port pairs and mixing of audio among several ports
 *
 * @extends module:core/abstracts.Hub
 *
 * @constructor module:elements.Mixer
 *
 * @param {string} id
 */
function Mixer(id){
  Hub.call(this, id);
};
inherits(Mixer, Hub);


/**
 * Connects each corresponding {@link MediaType} of the given source port with the sink port.
 *
 * @alias module:elements.Mixer.connect
 *
 * @param {MediaType} media
 *  The sort of media stream to be connected
 *
 * @alias module:elements.Mixer.connect
 *
 * @param {HubPort} source
 *  Video source port to be connected
 *
 * @alias module:elements.Mixer.connect
 *
 * @param {HubPort} sink
 *  Video sink port to be connected
 *
 * @param {module:elements.Mixer~connectCallback} [callback]
 *
 * @return {external:Promise}
 */
Mixer.prototype.connect = function(media, source, sink, callback){
  checkType('MediaType', 'media', media, {required: true});
  checkType('HubPort', 'source', source, {required: true});
  checkType('HubPort', 'sink', sink, {required: true});

  var params = {
    media: media,
    source: source,
    sink: sink,
  };

  return this.invoke('connect', params, callback);
};
/**
 * @callback module:elements.Mixer~connectCallback
 * @param {Error} error
 */

/**
 * Disonnects each corresponding {@link MediaType} of the given source port from the sink port.
 *
 * @alias module:elements.Mixer.disconnect
 *
 * @param {MediaType} media
 *  The sort of media stream to be disconnected
 *
 * @alias module:elements.Mixer.disconnect
 *
 * @param {HubPort} source
 *  Audio source port to be disconnected
 *
 * @alias module:elements.Mixer.disconnect
 *
 * @param {HubPort} sink
 *  Audio sink port to be disconnected
 *
 * @param {module:elements.Mixer~disconnectCallback} [callback]
 *
 * @return {external:Promise}
 */
Mixer.prototype.disconnect = function(media, source, sink, callback){
  checkType('MediaType', 'media', media, {required: true});
  checkType('HubPort', 'source', source, {required: true});
  checkType('HubPort', 'sink', sink, {required: true});

  var params = {
    media: media,
    source: source,
    sink: sink,
  };

  return this.invoke('disconnect', params, callback);
};
/**
 * @callback module:elements.Mixer~disconnectCallback
 * @param {Error} error
 */


/**
 * @alias module:elements.Mixer.constructorParams
 *
 * @property {MediaPipeline} mediaPipeline
 *  the {@link MediaPipeline} to which the Mixer belongs
 */
Mixer.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },
};

/**
 * @alias module:elements.Mixer.events
 *
 * @extend module:core/abstracts.Hub.events
 */
Mixer.events = [];
Mixer.events.concat(Hub.events);


module.exports = Mixer;


Mixer.check = function(key, value)
{
  if(!(value instanceof Mixer))
    throw SyntaxError(key+' param should be a Mixer, not '+typeof value);
};