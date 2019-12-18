const authUtil = {
    successTrue: (message, data) => {
        return {
            success: true, // 직관적으로 통신이 잘 되었는지 안되었는지 여부를 알려줌(클라 기준)
            message: message,
            data: data
        }
    },
    successFalse: (message) => {
        return {
            success: false,
            message: message
        }
    },
}

module.exports = authUtil