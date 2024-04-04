import { render } from "@testing-library/react"
import ContactUs from "../ContactUs"
test('should load contactUs page', () => {
 
   render(<ContactUs/>  );
   const heading = screen.getByRole("heading");
   expect(heading).toBeInTheDocument();

})
