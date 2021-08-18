import (
	"fmt"
	"time"
	"net"
	"net/http/fcgi"
    "os"
)

func main() {
	// Print HTML header
	fmt.Printf("Cache-control: no-cache\n")
	fmt.Printf("Content-type: text/html\n\n")
	fmt.Printf("<html><head><title>Hello CGI World</title></head><body><h1 align=center>Hello HTML World</h1><hr/>\n")
	fmt.Printf("Hello World<br/>\n")
	fmt.Printf("This program was generated at: %s\n<nr/>", time.Now())
	// address, _ := net.LookupHost("localhost")
	address, _ := html.escape(os.Getenv("REMOTE_ADDR"))
	fmt.Printf("Your current IP address is: %s<br/>", address)

	// Print HTML footer
	fmt.Printf("</body></html>")
	return
}