export const CHAT_TOPIC = "universal-connectivity"
export const CHAT_FILE_TOPIC = "universal-connectivity-file"
export const PUBSUB_PEER_DISCOVERY =  "universal-connectivity-browser-peer-discovery"
export const FILE_EXCHANGE_PROTOCOL = "/universal-connectivity-file/1"

export const CIRCUIT_RELAY_CODE = 290


// 👇 App specific dedicated bootstrap PeerIDs
// Their multiaddrs are ephemeral so peer routing is used to resolve multiaddr
export const WEBRTC_BOOTSTRAP_PEER_ID = "12D3KooWAUBrDw3cdp3MCsJ3CH4hi4zrUnpRUwnL4KZaeN38sjA2"
export const WEBTRANSPORT_BOOTSTRAP_PEER_ID = "12D3KooWAUBrDw3cdp3MCsJ3CH4hi4zrUnpRUwnL4KZaeN38sjA2"

export const BOOTSTRAP_PEER_IDS = [WEBTRANSPORT_BOOTSTRAP_PEER_ID, WEBRTC_BOOTSTRAP_PEER_ID]