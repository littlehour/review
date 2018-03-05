<%
    Response.ContentType="application/json"

    'Response.ContentType="application/javascript"

    'Response.ContentType="application/html"

    'Response.ContentType="application/xml"

    'Response.Expires=-1

    'Response.Write("{""test"":"""+request.form("test")+"""}")
    'Response.Write("{""test"":""test""}")
    'Response.Write(request.queryString("callback")+"({""test"":"""+request.form("test")+"""})")
    Response.Write("h({""test"":"""+request.form("test")+"""})")

    'Response.Write("console.log(""test"")")

    'Response.Write("<div>test</div>")

    'Response.Write("<?xml version=""1.0"" encoding=""utf-8""?>")
    'response.Write("<comments>")
    'response.Write("<comment username='username'>")
    'response.Write("<content>content</content>")
    'response.Write("</comment>")
    'response.write ("</comments>")

    Response.Flush()
    %>