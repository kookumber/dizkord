const postInvite = async (req, res) => {
    const { targetEmailAddress } = req.body;
    return res.send('Controller is working')
}

module.exports = postInvite