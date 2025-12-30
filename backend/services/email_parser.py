import re
from typing import Dict, Optional

class EmailParser:
    @staticmethod
    def parse_job_offer(email_body: str) -> Optional[Dict[str, str]]:
        """
        Parse job offer from email body
        Expected format:
        LOKALITA: ...
        TYP PRÁCE: ...
        etc.
        """
        try:
            job_data = {}
            
            # Define patterns for each field
            patterns = {
                'lokalita': r'LOKALITA:\s*(.+?)(?=\n[A-Z]+:|$)',
                'typ_prace': r'TYP PRÁCE:\s*(.+?)(?=\n[A-Z]+:|$)',
                'pocet_pracovnikov': r'POČET PRACOVNÍKOV:\s*(.+?)(?=\n[A-Z]+:|$)',
                'zaciatok': r'ZAČIATOK:\s*(.+?)(?=\n[A-Z]+:|$)',
                'hodinova_sazba': r'HODINOVÁ SAZBA:\s*(.+?)(?=\n[A-Z]+:|$)',
                'poziadavky': r'POŽIADAVKY:\s*(.+?)(?=\n[A-Z]+:|$)',
                'vybavenie': r'VYBAVENIE:\s*(.+?)(?=\n[A-Z]+:|$)',
                'praca_v_sobotu': r'PRÁCA V SOBOTU:\s*(.+?)(?=\n[A-Z]+:|$)',
                'ubytovanie': r'UBYTOVANIE:\s*(.+?)(?=\n[A-Z]+:|$)',
                'splatnost': r'SPLATNOSŤ:\s*(.+?)(?=\n|$)'
            }
            
            # Extract each field
            for field, pattern in patterns.items():
                match = re.search(pattern, email_body, re.DOTALL | re.IGNORECASE)
                if match:
                    job_data[field] = match.group(1).strip()
                else:
                    job_data[field] = 'Neuvedené'
            
            # Validate that at least locality and job type are present
            if job_data.get('lokalita') != 'Neuvedené' and job_data.get('typ_prace') != 'Neuvedené':
                return job_data
            
            return None
            
        except Exception as e:
            print(f"Error parsing email: {str(e)}")
            return None
