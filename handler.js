'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
	      message: 'Go Serverless v2.0! Hello World 2. Your function executed successfully! Demo branch push 4',
        input: event,
      },
      null,
      2
    ),
  };
};
