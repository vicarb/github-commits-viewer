import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CommitsService {
  private readonly owner = 'vicarb';
  private readonly repo = 'silver-dollop';

  async getCommitHistory(): Promise<any> {
    try {
      const url = `https://api.github.com/repos/${this.owner}/${this.repo}/commits`;
      const response = await axios.get(url);

      return response.data.map(commit => ({
        sha: commit.sha,
        message: commit.commit.message,
        author: commit.commit.author.name,
        date: commit.commit.author.date,
        url: commit.html_url,
      }));
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Error fetching commit history:', error);

      // Throwing a user-friendly error message
      throw new HttpException(
        'Error fetching commit history from GitHub',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
