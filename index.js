// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = "Hola, puedes pedirme jugar para comenzar el camino"
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    } 
};
const JugarIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'JugarIntent';
    },
    handle(handlerInput) {
        const speakOutput = 
        '<prosody pitch="low">' + "Bienvenido al camino, debes encontrar " + "<emphasis level='moderate'>el pergamino del destino</emphasis>" + ", te recomiendo taparte los ojos para una mejor experiencia." + '<audio src="soundbank://soundlibrary/backgrounds_ambience/volcano_earthquake/volcano_earthquake_01"/>' +
        "Son las 10 de la noche, te encuentras solo en medio del bosque y no sabes por donde ir, la incertidumbre te asecha y un sentido de supervivencia te rodea, " +
        "debes tomar una decisión o caeras en perdición, deseas ir al norte, sur, este u oeste?" + '</prosody>';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const OesteIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OesteIntent';
    },
    handle(handlerInput) {
        const speakOutput = 
        '<prosody pitch="low">' + "Bienvenido al camino, debes encontrar " + "<emphasis level='moderate'>el pergamino del destino</emphasis>" + ", te recomiendo taparte los ojos para una mejor experiencia." + '<audio src="soundbank://soundlibrary/backgrounds_ambience/volcano_earthquake/volcano_earthquake_01"/>' +
        "Son las 10 de la noche, te encuentras solo en medio del bosque y no sabes por donde ir, la incertidumbre te asecha y un sentido de supervivencia te rodea, " +
        "debes tomar una decisión o caeras en perdición, deseas ir al norte, sur, este u oeste?" + '</prosody>';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const NorteIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NorteIntent';
    },
    handle(handlerInput) {
        const speakOutput = 
        '<prosody pitch="low">' + "Bienvenido al camino, debes encontrar " + "<emphasis level='moderate'>el pergamino del destino</emphasis>" + ", te recomiendo taparte los ojos para una mejor experiencia." + '<audio src="soundbank://soundlibrary/backgrounds_ambience/volcano_earthquake/volcano_earthquake_01"/>' +
        "Son las 10 de la noche, te encuentras solo en medio del bosque y no sabes por donde ir, la incertidumbre te asecha y un sentido de supervivencia te rodea, " +
        "debes tomar una decisión o caeras en perdición, deseas ir al norte, sur, este u oeste?" + '</prosody>';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const SurIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SurIntent';
    },
    handle(handlerInput) {
        const speakOutput = 
        '<prosody pitch="low">' + "Bienvenido al camino, debes encontrar " + "<emphasis level='moderate'>el pergamino del destino</emphasis>" + ", te recomiendo taparte los ojos para una mejor experiencia." + '<audio src="soundbank://soundlibrary/backgrounds_ambience/volcano_earthquake/volcano_earthquake_01"/>' +
        "Son las 10 de la noche, te encuentras solo en medio del bosque y no sabes por donde ir, la incertidumbre te asecha y un sentido de supervivencia te rodea, " +
        "debes tomar una decisión o caeras en perdición, deseas ir al norte, sur, este u oeste?" + '</prosody>';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const EsteIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EsteIntent';
    },
    handle(handlerInput) {
        const speakOutput = 
        '<prosody pitch="low">' + "Bienvenido al camino, debes encontrar " + "<emphasis level='moderate'>el pergamino del destino</emphasis>" + ", te recomiendo taparte los ojos para una mejor experiencia." + '<audio src="soundbank://soundlibrary/backgrounds_ambience/volcano_earthquake/volcano_earthquake_01"/>' +
        "Son las 10 de la noche, te encuentras solo en medio del bosque y no sabes por donde ir, la incertidumbre te asecha y un sentido de supervivencia te rodea, " +
        "debes tomar una decisión o caeras en perdición, deseas ir al norte, sur, este u oeste?" + '</prosody>';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adios!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        JugarIntentHandler,
        NorteIntentHandler,
        SurIntentHandler,
        EsteIntentHandler,
        OesteIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
